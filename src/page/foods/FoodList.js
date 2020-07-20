import React, {Component} from 'react';
import {Table} from 'react-bootstrap/cjs'

class FoodList extends Component {
    render() {
        let { foods, isLoading } = this.props
        console.log(foods)

        if(isLoading) {
            return <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        }

        let food = foods.map((food, index) => {
            return <tr key={index}>
                <td>{index+1}</td>
                <td>{food.foodCode}</td>
                <td>{food.foodName}</td>
                <td>{food.foodPrice}</td>
                <td>{food.foodCategory.category_name}</td>
                <td>{food.foodStock}</td>
            </tr>
        })

        return (
            <>
                <h3>Food List</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Food ID</th>
                            <th>Food Name</th>
                            <th>Food Price</th>
                            <th>Food Category</th>
                            <th>Food Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {food}
                    </tbody>
                </Table>
            </>
        );
    }
}

export default FoodList;