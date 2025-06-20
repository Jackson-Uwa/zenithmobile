import { Switch, Route, Redirect } from "react-router-dom";
import {
  ToastContainer
} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import Layout from "./layout/layout";

import TransferPage from "../pages/transfer/transfer";
import OverviewPage from "../pages/overview/overview";
import AirtimePage from "../pages/airtime/airtime";
import BillsPage from "../pages/bills/bills";

import TransferHistory from "../component/transfer/history/transferHistory";
import SavedPayments from "../component/transfer/savedPayments/savedPayments";

import LoginPage from "../pages/login/login";


function App() {

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <Route path="/overview">
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

        <Route path="/transfer/user/transferHistory">
          <TransferHistory />
        </Route>

        <Route path="/transfer/user/savedPayments">
          <SavedPayments />
        </Route>


        <Redirect to="/" />
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </Layout>
  )
}

export default App
