import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                long: this.props.long
            }
        });
    }
    
    render(){
        //this.refs.map => gives access to the html element
        return (
            <div ref="map" />
        );
    }
}


export default GoogleMap;