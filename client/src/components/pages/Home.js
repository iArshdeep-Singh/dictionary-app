import Layout from "../layout/Layout"
import './css/home.css'
import {useDispatch, useSelector} from 'react-redux'
import {inputData, dictionaryData} from '../../store/slices/dictionaryData'



const Home = () => {

    const dispatch = useDispatch()
    let {input, data} = useSelector((state) => state.dictionary)

    const handleChange = (event) => {

        const {value} = event.target
        dispatch(inputData(value))

    }

    const handleSuggestions = async (value) => {

        dispatch(dictionaryData(value))
    }


    const handleSearch = async () => {

        dispatch(dictionaryData(input))
    }


    return (
        <Layout>
            <div id="search-box">
                <div id="search-props">
                    <input type="text" onChange={handleChange} placeholder="Enter here" />
                    <button onClick={handleSearch}>Search</button>
                </div>

                <div id="words">
                    {data && data[0]?.fl ? <><b>{data[0]?.hwi?.hw}</b>
                        <pre><u>Definition</u>:</pre>
                        <i>{data && data[0]?.fl}</i>
                        <p>{data && data[0]?.shortdef[0]}</p>
                    </>
                        : <>
                            {data && data[0] ? <h2 id="did">Did you mean?</h2> : <></>}
                            <ul id="suggestions">
                                {data && data[0] && data.map((item, index) => (
                                    <li key={index} onClick={() => handleSuggestions(item)}>{item}</li>
                                ))}
                            </ul></>}
                </div>

            </div>

        </Layout >
    )
}

export default Home
// https://media.merriam-webster.com/audio/prons/[language_code]/[country_code]/[format]/[subdirectory]/[base filename].[format]