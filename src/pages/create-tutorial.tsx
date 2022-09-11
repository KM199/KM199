import { useState } from "react";
import api from "../utils/api";


const CreateTutorial = () =>{
    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [tutorialSteps, setTutorialSteps] = useState('');
    const [reward, setReward] = useState(0);
    const [currency, setCurrency] = useState('SOL');



    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const response = await api.post('/tutorial/create', {
            url,
            name,
            image,
            description,
            tutorialSteps,
            reward,
            currency
        })

        console.log(name, image, description, tutorialSteps, reward, currency)
        console.log(response)

        setUrl('')
        setName('')
        setImage('')
        setDescription('')
        setTutorialSteps('')
        setReward(0)
        setCurrency('SOL')
    }

    return (
        <div className="create-tutorial-container">
            <h2>Tutorial Creator</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Url</p>
                    <input required type='text' value={url} onChange={e => setUrl(e.target.value)} />
                </div>
                <div>
                    <p>Project Name</p>
                    <input required type='text' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <p>Image</p>
                    <input type='text' value={image} onChange={e => setImage(e.target.value)} />
                </div>
                <div>
                    <p>Description</p>
                    <textarea value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div>
                    <p>Tutorial_steps (JSON)</p>
                    <textarea required value={tutorialSteps} onChange={e => setTutorialSteps(e.target.value)} />
                </div>
                <div>
                    <p>Reward</p>
                    <input type='number' value={reward} onChange={e => setReward(parseFloat(e.target.value))} />
                </div>
                <div>
                    <p>Currency</p>
                    <select name="cryptocurrency" value={currency} onChange={e => setCurrency(e.currentTarget.value)}>
                        <option selected value="SOL">SOL</option>
                        <option value="BTC">BTC</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTutorial;