import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getUsers, getUsersSuccess } from "../actions";
import { connect } from "react-redux";


class Table extends Component {
    constructor(props) {
        super(props);
    }

    DeleteStudent = () => {
        this.props.onLoadUsersClick();
        axios.delete('http://localhost:60540/Api/Student/Deletestudent?id=' + this.props.obj.Id)
            .then(json => {
                if (json.data.Status === 'Delete') {
                    alert('Record deleted successfully!!');
                    console.log(this.props.loading);
                }
            })
            .then(json => this.props.onLoadUsersComplete(json));

    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.Name}
                </td>
                <td>
                    {this.props.obj.RollNo}
                </td>
                <td>
                    {this.props.obj.Class}
                </td>
                <td>
                    {this.props.obj.Address}
                </td>
                <td>
                    {/* <Link to={this.props.obj.Id} className="btn btn-success">Edit</Link> */}
                    <Link to={"/edit/"+this.props.obj.Id} className="btn btn-success">Edit</Link>  
                </td>
                <td>
                    <button type="button" onClick={this.DeleteStudent} className="btn btn-danger">Delete</button>
                </td>

                <h3>Users</h3>
                {this.props.loading ? <p>loading...</p> : null}
                {!this.props.loading && this.props.business ? (
                    <ul>
                        {this.props.business.map(business => (
                            <li key={business.Id}>
                                <strong>{business.Name}</strong> | {business.Class}
                            </li>
                        ))}
                    </ul>
                ) : null}
            </tr>
        );
    }
}


const mapStateToProps = state => ({
    business: state.business,
    loading: state.isLoading
});

const mapDispatchToProps = dispatch => {
    return {
        onLoadUsersClick: () => {
            dispatch(getUsers());
        },
        onLoadUsersComplete: business => {
            dispatch(getUsersSuccess(business));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);
//export default Table;