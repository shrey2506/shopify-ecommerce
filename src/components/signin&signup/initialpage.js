


            <div className="final-wrapper">
            <div className={this.state.pageIndex==1?'active':'inactive'}>

                    <TextField
                        hintText="Email"
                        floatingLabelText="Please insert your valid email"
                        onBlur={this.handleEmailBlur.bind(this)}
                        errorText={this.state.email.errorText}
                        id="Email"
                    /><br />

                    <TextField
                        className="password-container"
                        hintText="Password Field"
                        floatingLabelText="Password"
                        type="password"
                        errorText={this.state.password.errorText}
                        onBlur={this.handlePasswordBlur.bind(this)}
                        id="Password"
                    /><br />

                    <TextField
                        hintText="confirm your Password"
                        floatingLabelText="Repeat Password"
                        type="password"
                        errorText={this.state.confirmPassword.errorText}
                        onBlur={this.handlePasswordConfirmBlur.bind(this)}
                        id="ConfirmPassword"
                    /><br />
                    <RaisedButton
                    type="submit"
                        label="Next"
                        primary={true}
                        buttonStyle={{ borderRadius: '3px' }}
                        style={{ marginTop: '1rem' }}
                        onClick={this.handlePageOneNextClick.bind(this)}
                    />

               </div>
            </div>