import React from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import initApollo from './initApollo'

export default ComposedComponent => {
  console.log('withData', ComposedComponent)

  return class WithData extends React.Component {
    static displayName = `WithData(${ComposedComponent.displayName})`
    static propTypes = {
      serverState: PropTypes.object.isRequired
    }

    static async getInitialProps (ctx) {
      console.log('getInitialProps', ctx)

      let serverState = {}

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx)
      }

      // Run all graphql queries in the component tree
      // and extract the resulting data
      if (!process.browser) {
        const apollo = initApollo()
        // Provide the `url` prop data in case a graphql query uses it
        const url = {query: ctx.query, pathname: ctx.pathname}

        // Run all graphql queries
        const app = (
          <ApolloProvider client={apollo}>
            <ComposedComponent url={url} {...composedInitialProps} />
          </ApolloProvider>
        )
        await getDataFromTree(app)

        // Extract query data from the Apollo's store
        const state = apollo.getInitialState()

        serverState = {
          apollo: { // Make sure to only include Apollo's data state
            data: state.data
          }
        }
      }

      return {
        serverState,
        ...composedInitialProps
      }
    }

    constructor (props) {
      super(props)
      this.apollo = initApollo(this.props.serverState)
      console.log('constructor', props, this)
    }

    render () {
      console.log('render', this.props)
      console.log('render ComposedComponent', ComposedComponent)


      return (
        <ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props}/>
        </ApolloProvider>
      )
    }
  }
}