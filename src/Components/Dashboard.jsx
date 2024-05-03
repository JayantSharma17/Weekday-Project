import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
let pg = 1;
const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    const [filterPosts, setFilterPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [selectedRole, setSelectedRole] = useState('');
    const [selectExp, setSelectExp] = useState('');
    const [searchTerm, setSearchTerm] = useState('');



    const fetchPosts = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const payload = {
                "limit": 10,
                "offset": (pg - 1) * 10
            };
            console.log(pg)
            const res = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', payload);
            let data = res.data.jdList;
            setPosts(prevPosts => [...prevPosts, ...data]);
            setFilterPosts(prevPosts => [...prevPosts, ...data]);
            setPage(prevPage => prevPage + 1);
            pg += 1;

            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);

        }
    };

    const handleScroll = () => {
        if (
            window.innerHeight + window.scrollY >= document.documentElement.offsetHeight &&
            !loading

        ) {
            fetchPosts();

        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);
    useEffect(() => {
        const filtered = posts.filter(rep => {
            return rep.companyName.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilterPosts(filtered);
    }, [searchTerm]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const filterDataRole = (t) => {
        if (t === "") {
            setFilterPosts(posts)
            return;
        }
        let res = posts.filter(item => item.jobRole.toLowerCase() === t.toLowerCase());
        setFilterPosts(res);
        console.log(res)
    };
    const filterDataExp = (t) => {
        if (t === "") {
            setFilterPosts(posts)
            return;
        }
        let res = posts.filter(item => item.minExp == t.toLowerCase());
        setFilterPosts(res);
        console.log(res)
    };

    return (



        <div className="App">
            <div className='toph'>
                <select value={selectedRole} onChange={(e) => { setSelectedRole(e.target.value); filterDataRole(e.target.value) }} >
                    <option value="">All Roles</option>
                    <option value="Backend">Backend</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Fullstack">Fullstack</option>
                    <option value="IOS">IOS</option>
                    <option value="Flutter">Flutter</option>
                    <option value="React Native">React Native</option>
                    <option value="Android">Android</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Tech Lead">Tech Lead</option>
                </select>

                <select value={selectExp} onChange={(e) => { setSelectExp(e.target.value); filterDataExp(e.target.value) }} >
                    <option value="">Experience</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                </select>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search by Name"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="card-grid">
                {filterPosts.map((post, i) => {
                    return <Card key={i} post={post} />
                })}
                {fetchPosts.length==0 && loading==false? <h1 style={{textAlign:'center',width:'100%'}}>No Job found</h1>:null}
            </div>
            {loading && <p style={{ textAlign: 'center', margin: '12px' }}>Loading...</p>}
        </div>
    );
};

export default Dashboard;
