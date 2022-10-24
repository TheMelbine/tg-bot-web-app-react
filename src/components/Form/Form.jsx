import React, {useCallback, useEffect} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {

    const [country, setCountry] = React.useState('')
    const [street, setStreet] = React.useState('')
    const [subject, setSubject] = React.useState('physical')
    const {tg} = useTelegram()

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data))
    }, [country, street, subject])

    useEffect(() => {
        tg.MainButton.onClick(onSendData)
        return () => {
            tg.MainButton.offClick(onSendData)
        }
    }, [onSendData])


    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send details'
        })
    }, [])

    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }

    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Enter your details</h3>
            <input
                className={'input'}
                type="text"
                placeholder={'Country'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="text"
                placeholder={'Street'}
                value={street}
                onChange={onChangeStreet}
            />

            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Individual</option>
                <option value={'legal'}>Legal entity</option>

            </select>

        </div>


    );
};

export default Form;