import React from 'react';
// import Cookies from 'js-cookie';
import api from '../api';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id:null,
      email:null,
      name:null,
      token:null,
      loading:true,
      error:null,
      data:[],
    }
  }

  componentDidMount(){
    // console.log("3. Updating");
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({loading:true, error:null,});
    try{
      const result = await api.getToken();
      this.setState(
        { 
          loading:false,
          id:result.data.id,
          name:result.data.name,
          status:result.code,
          
        });  
      document.cookie = `email=${result.data.email}`;
      
    }
    catch(error){
      this.setState({loading:false,error:error});
    }
  }

  render(){
    return (
      <h1>Hello World</h1>
    );  
  }
}
export default Home;