import Login from "./Login"
const Home = () => {
  const logOut = async () => {
    try {
      await axios.post('https://harsh-2onb.onrender.com/admin/logout'); // Replace with your API endpoint
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
