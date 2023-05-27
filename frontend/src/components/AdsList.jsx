import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import { observer } from 'mobx-react-lite'
import { Context } from '../index';
import AdsItem from './AdsItem';

const AdsList = observer(() => {
    const ads = [
        {id: 1, name:'Константин Иванович', description:'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription'},
        {id: 2, name:'Василий Петрович', description:'description'},
        {id: 3, name:'Эдуард Сидорович', description:'description'},
        // {id: 4, name:'Вадим Алексеевич', description:'description'},
        // {id: 5, name:'Владислав Иванович', description:'description'},
        // {id: 6, name:'Василиса Николаевна', description:'description'},
        // {id: 7, name:'Анастасия Михаловна', description:'description'},
        // {id: 8, name:'Алексей Алексеевич', description:'description'},

    ];

    return (
        <Row>
            {ads.map(ad =>
                <AdsItem key={ad.id} ad={ad}/>
            )}
        </Row>
    )
})

export default AdsList;