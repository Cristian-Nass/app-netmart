import user from '../data/user';

const Home = () => {    
    return (
        <div>
            <h1>Home</h1>
            <p>User: {user.firstName} {user.lastName}</p>
        </div>
    );
};

export default Home;