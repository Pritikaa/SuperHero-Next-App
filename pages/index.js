import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import Link from "next/link";

const axios = require("axios").default;

const index = ({ heroes }) => {
  return (
    <div className="container">
      {/* <h1 className="display-2">Superhero Identity Manager</h1> */}
      <h1 className="text-6xl font-bold flex items-center justify-center flex-col my-8">Superhero Identity Manager</h1>
      <div>
        {heroes.map((hero) => {
          return (
            <div className="">
            <MDBCard className=" border-2 my-2 " style={{ maxWidth: "22rem" }}>
              <MDBCardBody>
                <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                <MDBCardText>
                  Reveal Identity
                </MDBCardText>
                <Link href={`/${hero._id}`}><MDBBtn className="mx-2">View Hero</MDBBtn></Link>
                <Link href={`/${hero._id}/edit`}><MDBBtn>Edit Hero</MDBBtn></Link>
              </MDBCardBody>
            </MDBCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await axios("http://localhost:3000/api/hero");
  //console.log(res.data.hero);
  const { hero } = res.data;
  return {
    props: { heroes: hero },
  };
}

// index.getInitialProps = async () => {
//   const res = await axios('http://localhost:3000/api/hero');
//   console.log(res.data.hero);
//   return {}
// }

export default index;
