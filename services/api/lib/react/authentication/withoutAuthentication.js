import Router from "next/router";
import React from "react";
import { inject, observer } from "mobx-react";

export default ({ redirectPath }) => ComposedComponent => {
  @inject("application")
  @observer
  class WithoutAuthentication extends React.Component {
    static displayName = `WithoutAuthentication(${ComposedComponent.displayName})`;
    static propTypes = {};

    static async getInitialProps(ctx) {
      console.log("WithoutAuthentication#getInitialProps");

      let composedInitialProps = {};
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      const { application } = composedInitialProps;

      if (process.browser) {
        console.log(
          "WithoutAuthentication#getInitialProps browser",
          this.props
        );

        if (application.session.isAuthenticated(ctx)) {
          console.log(
            "WithoutAuthentication#getInitialProps user is authenticated, redirecting"
          );

          debugger;

          Router.push(redirectPath);
        }
      } else {
        console.log("WithoutAuthentication#getInitialProps server");

        if (ctx.req.isAuthenticated()) {
          console.log(
            "WithoutAuthentication#getInitialProps user is authenticated, redirecting"
          );

          ctx.res.writeHead(302, {
            Location: redirectPath
          });
          ctx.res.end();
        }
      }

      return {
        ...composedInitialProps
      };
    }

    componentWillReceiveProps() {
      console.log("WithoutAuthentication#componentWillReceiveProps", arguments);
    }

    shouldComponentUpdate() {
      console.log("WithoutAuthentication#shouldComponentUpdate", arguments);
    }

    componentDidReceiveProps() {
      console.log("WithoutAuthentication#componentDidReceiveProps", arguments);
    }

    render() {
      console.log("WithoutAuthentication#render", this.props);

      return <ComposedComponent {...this.props} />;
    }
  }

  return WithoutAuthentication;
};