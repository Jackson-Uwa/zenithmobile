import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./layout/layout";

import TransferPage from "../pages/transfer/transfer";
import OverviewPage from "../pages/overview/overview";
import AirtimePage from "../pages/airtime/airtime";
import BillsPage from "../pages/bills/bills";


function App() {

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <OverviewPage />
        </Route>

        <Route path="/airtime">
          <AirtimePage />
        </Route>

        <Route path="/transfers">
          <TransferPage />
        </Route>

        <Route path="/bills">
          <BillsPage />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Layout>
  )
}

export default App
