import React ,{ useState,useCallback } from 'react';
import { SearchBar } from 'react-weui';
import { SearchStyle } from './style';

function Search(props){
    const [value,setValue] = useState('');
    const { onSubmit } = props;
    const changeHandle = useCallback(value =>{
        setValue(value)
        if(value === ''){
            onSubmit(value);
        }
    },[onSubmit,setValue])

    const submitHandle = useCallback(()=>{
        onSubmit(value)
    },[onSubmit,value])
    return (
        <SearchStyle>
            <SearchBar 
             onChange = { changeHandle }
             defaultValue={ value }
             placeholder={ '搜索' }
             lang = {
                 {
                     cancel:'取消'
                 }
             }
             onSubmit = { submitHandle }
            />
        </SearchStyle>
    )
}

export default Search