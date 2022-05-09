import { useState } from "react";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import axios from "axios";

const EditHero = ({ hero }) => {
  const router = useRouter();
  const heroId = router.query.id; 

  const [form, setForm] = useState({
    superHero: hero.superHero,
    realName: hero.realName,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios(`http://localhost:3000/api/hero/${heroId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="display-3">Add a new Hero Identity</h1>
      <form onSubmit={handleForm}>
        <MDBInput
          onChange={handleChange}
          label="superHero"
          type="text"
          name="superHero"
          value={form.superHero}
        />
        <MDBInput
          className="my-2"
          onChange={handleChange}
          label="realName"
          type="text"
          name="realName"
          value={form.realName}
        />
        <MDBBtn type="submit">Edit Hero</MDBBtn>
      </form>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await axios(`http://localhost:3000/api/hero/${id}`);
  console.log(res.data.hero);
  const { hero } = res.data;
  return {
    props: { hero: hero },
  };
}

export default EditHero;
