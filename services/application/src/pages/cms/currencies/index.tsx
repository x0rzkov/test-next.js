import * as React from 'react';
import * as cryptoCoins from 'react-cryptocoins';
import Router from "next/router";
import { Provider } from "mobx-react";
import { Row, Col, Jumbotron, Button, Table } from "reactstrap";

import currencyPairs from '../../../../../api/src/graphql/resolvers/RootQuery/currencyPairs';
import currencyPairsStore from '../../../stores/currencyPairs';
import sessionStore from '../../../stores/session';
import userStore from '../../../stores/user';
import { Container } from "../../../components/common/container";
import { CurrencyPairsStore, ICurrencyPair } from '../../../stores/currencyPairs';
import { IApplicationPageProps } from "../../../types/application";
import { IGetInitialPropsContext } from '../../../types/next';
import { Layout } from "../../../components/pages/cms/layout";
import { ensureAuthenticatedContext } from "../../../helpers";

interface IIconProps {
  currency: string;
}

const Icon = (props: IIconProps) => {
  const { currency } = props;

  const iconKey = currency.substring(0, 1).toUpperCase() + currency.substring(1).toLowerCase();

  const IconComponent = cryptoCoins[iconKey];

  if (IconComponent) {
    return <IconComponent />;
  }

  return null;
};

const handleRowClick = (currencyAKey: string, currencyBKey: string) => () => {
  Router.push(`/cms/currencies/chart?currencyPair=${currencyAKey}_${currencyBKey}`);
};

interface ICurrenciesProps {
  currencyPairsStore: CurrencyPairsStore;
}

const Currencies = (props: ICurrenciesProps) => {
  const { currencyPairsStore } = props;

  if (!currencyPairsStore.list) {
    return null;
  }

  const currencyElements = currencyPairsStore.list
    .sort((a: ICurrencyPair, b: ICurrencyPair): number => {
      if (a.currencyA24HVolume > b.currencyA24HVolume) {
        return 1;
      }

      if (a.currencyA24HVolume === b.currencyA24HVolume) {
        return 0;
      }

      return -1;
    })
    .map((currencyPair: ICurrencyPair, i: number): React.ReactElement<any> => {
      const {
        id,
        key,
        currencyAKey,
        currencyAName,
        currencyATxFee,
        currencyAMinConf,
        currencyBKey,
        currencyBName,
        currencyBTxFee,
        currencyBMinConf,
        currencyA24HVolume,
        currencyB24HVolume,
      } = currencyPair;

      return (
        <tr
          key={i}
          onClick={handleRowClick(currencyAKey, currencyBKey)}
        >
          <td><Icon currency={currencyAKey} /></td>
          <td>{currencyAKey}</td>
          <td>{currencyA24HVolume}</td>

          <td><Icon currency={currencyBKey} /></td>
          <td>{currencyBKey}</td>
          <td>{currencyB24HVolume}</td>
        </tr>
      );
    });

  return (
    <React.Fragment>
      {currencyElements}
    </React.Fragment>
  );
};

export interface ICMSCurrenciesPageProps extends IApplicationPageProps {
  currencyPairsStore: CurrencyPairsStore
}

export default class CMSCurrenciesPage extends React.Component<ICMSCurrenciesPageProps, any> {
  static async getInitialProps(ctx: IGetInitialPropsContext) {
    const { err, req, res, pathname, query, asPath } = ctx;

    // console.log('CMSCurrenciesPage#getInitialProps');

    if (err) {
      throw err;
    }

    sessionStore.loadFromContext(ctx);

    // ensureAuthenticatedContext(ctx, sessionStore);

    await currencyPairsStore.load();

    return {
      sessionStore,
      userStore,
      currencyPairsStore,
      pathname,
      query,
      asPath,
    };
  }

  render() {
    return (
      <Provider
        sessionStore={this.props.sessionStore}
        userStore={this.props.userStore}
        currencyPairsStore={this.props.currencyPairsStore}
      >
        <Layout
          title="CMS / Currencies"
          pathname={this.props.pathname}
        >
          <Container>
            <Row>
              <Col>
                <h1>Currencies</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table>
                  <thead>
                    <tr>
                      <td></td>
                      <td>Currency A</td>
                      <td>Volume</td>

                      <td></td>
                      <td>Currency B</td>
                      <td>Volume</td>
                    </tr>
                  </thead>

                  <tbody>
                    <Currencies
                      currencyPairsStore={currencyPairsStore}
                    />
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </Layout>
      </Provider>
    );
  }
}
