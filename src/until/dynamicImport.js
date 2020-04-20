import React, { Component } from 'react'

export default function dynamicImport(importComponent) {
    class DynamicImport extends Component {
        constructor(props){
            super(props);
            this.state = {
                component:null
            }
        }
        render() {
            const Component = this.state.component;
            return (
                Component?
                <Component { ...this.props }/>
                :
                null
            )
        }

        componentDidMount(){
            importComponent().then(module => {
                debugger
                this.setState({
                    component:module.default
                })
            })
        }
    }

    return DynamicImport
}

