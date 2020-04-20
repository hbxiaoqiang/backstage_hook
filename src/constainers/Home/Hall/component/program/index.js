import React from 'react';
import { ProgramDiv } from './style';
import { program } from '../../../../../config';
import { Link } from 'react-router-dom';

function Program(props) {
    return (
        <ProgramDiv>
            <div className='weui-grids'>
                {
                    Object.values(program).filter((value)=>{

                        return value.permise.includes(props.typeId)

                    }).map(function (value, index) {
                        return (
                            <Link key={index}
                             to={value.href} className='weui-grid'>
                                <i className={value.ico} ></i>
                                <p>
                                {value.name}
                                </p>
                            </Link>
                        )
                    })
                }
            </div>
        </ProgramDiv>
    )
}

export default Program;