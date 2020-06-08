import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { onChangePhone, onChangePassword, signIn } from '../../actions';
import { Loader } from '../../components';
import './style.css';

class SignInPage extends Component {
  onSignIn = () => {
    this.props.signIn(
      this.props.phone,
      this.props.password,
      this.props.history
    );
  };

  render() {
    return this.props.loading && !this.props.user ? (
      <Loader />
    ) : (
      <div className=" component">
        <div className="sign-in">
          <input
            type="text"
            placeholder="phone"
            onChange={(event) => this.props.onChangePhone(event.target.value)}
            value={this.props.phone}
          />
          <input
            type="text"
            placeholder="password"
            onChange={(event) =>
              this.props.onChangePassword(event.target.value)
            }
            value={this.props.password}
          />
          <button onClick={this.onSignIn}>Sign in</button>
          {!this.props.loading && this.props.error && (
            <div>{`Ошибка: ${this.props.error}`}</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    phone: state.auth.phone,
    password: state.auth.password,
    loading: state.auth.loading,
    user: state.auth.user,
    error: state.auth.error,
  };
};

const actionsCreator = {
  onChangePhone,
  onChangePassword,
  signIn,
};

export const SignInPageConnect = connect(
  mapStateToProps,
  actionsCreator
)(SignInPage);

SignInPage.propTypes = {
  phone: PropTypes.string,
  password: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
  user: PropTypes.object,
  onChangePhone: PropTypes.func,
  onChangePassword: PropTypes.func,
  signIn: PropTypes.func,
  history: PropTypes.object,
};
