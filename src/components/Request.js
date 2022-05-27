import  {useEffect} from 'react';

async function Request(resource) {
    useEffect(() => {
        fetch(resource)
    })
}

export default Request;