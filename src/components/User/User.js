import React from 'react';
import GenericNew from '../Generic/GenericNew';
import GenericList from '../Generic/GenericList';
import GenericContext from '../../contexts/GenericContext'
import Header from '../Header/Header'
import './User.css'

class User extends React.Component{
  static contextType = GenericContext;

  componentDidMount() {
    this.context.clearError()
    this.context.getAll()
  }

  acceptCode = () => {
    this.context.acceptCode();
  }

  render(){
    const currentUser = this.context.currentUser;
    return <div>
        <Header />
      <main className='content-with-nav'>
        {currentUser && <section>
          {currentUser.last_name + ' ' + currentUser.first_name} code is <span className='user-code'>{currentUser.user_code}</span>
          <p><button className='green' onClick={this.acceptCode}>OK</button></p>
        </section>}
        <section>
          {this.context.showForm && <GenericNew />}
          {!this.context.showForm && <button className='blue' onClick={e => this.context.showHideForm(!this.context.showForm)}>Add</button>}
        </section>
        {this.context.error && <section><div className='errorMsg'>{this.context.error}</div></section>}
        <section>
          <GenericList/>
        </section>
      </main>
    </div>
  }
}

export default User;
