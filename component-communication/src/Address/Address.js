import React, {Component} from 'react';

class Address extends Component {
    render() {
        return (
          <div>
            <p>{this.props.address}</p>
          </div>
        );
    }
}

export default Address;