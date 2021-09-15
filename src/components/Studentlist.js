import React, { Component } from 'react';
import axios from 'axios';
import Table from './Table';
//import EditStudent from './Editstudent';

 class Studentlist extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            business: []
         };
    }
    componentDidMount() {
        debugger;
        axios.get('http://localhost:60540/Api/Student/Studentdetails')
            .then(response => {
                this.setState({ business: response.data });
                debugger;
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.business.map(function (object, i) {
            return <Table obj={object} key={i} />;
            // return <EditStudent obj={object} key={i} />;  
        });
    }

    render() {
        return (
            <div>
                <h4 align="center">Student List</h4>
                <table className="table table-striped" style={{ marginTop: 10 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>RollNo</th>
                            <th>Class</th>
                            <th>Address</th>
                            <th colSpan="4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//     users: state.users,
//     loading: state.isLoading
// });

// const mapDispatchToProps = dispatch => {
//     return {
//         onLoadUsersClick: () => {
//             dispatch(getUsers());
//         },
//         onLoadUsersComplete: users => {
//             dispatch(getUsersSuccess(users));
//         }
//     };
// };
// export default connect(
//    // mapStateToProps,
//   //  mapDispatchToProps
//   )(Studentlist);

  export default  Studentlist;
  