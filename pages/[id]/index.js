import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const axios = require("axios").default;

const IndividualHero = ({hero}) => {
    const router = useRouter();
    const heroId = router.query.id;
    
    const deleteHero  = async () => {
        try {
            const deleteHero = await axios(`http://localhost:3000/api/hero/${heroId}`, {
                method: "DELETE"
            });
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <h1 className="display-3">Identity of Hero</h1>
            <MDBCard className="border border-2 my-2" style={{ maxWidth: "22rem" }}>
              <MDBCardBody>
                <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                <MDBCardText>
                  {hero.realName}
                </MDBCardText>
                <MDBBtn onClick={deleteHero} className="btn btn-danger">Delete Hero</MDBBtn>
              </MDBCardBody>
            </MDBCard>
        </div>
    );
};



export async function getServerSideProps({params}) {
    const id = params.id;
    const res = await axios(`http://localhost:3000/api/hero/${id}`);
    console.log(res.data.hero);
    const { hero } = res.data;
    return {
      props: { hero: hero },
    };
  }

  
export default IndividualHero; 

