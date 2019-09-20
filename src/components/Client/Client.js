import React from 'react';
import GenericNew from '../Generic/GenericNew';
import GenericList from '../Generic/GenericList';
import GenericContext from '../../contexts/GenericContext'
import Header from '../Header/Header'

class Client extends React.Component{
  static contextType = GenericContext;

  componentDidMount() {
    this.context.clearError()
    this.context.getAll()
  }

  render(){
    return <div>
        <Header />
      <main className='content-with-nav'>
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

export default Client;