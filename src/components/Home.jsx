import Login from "./Login"
const Home = () => {
  const logOut = async () => {
    try {
      await axios.post('http://localhost:8086/admin/logout'); // Replace with your API endpoint
      navigate('/login'); // Redirect to login after logout
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <>
     <Login/>
    </>
  );
};

export default Home;
