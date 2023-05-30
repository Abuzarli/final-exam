import { Button, Grid } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import style from "./index.module.css";
import { Card } from "antd";
import { useEffect, useState } from "react";
import { getAllExercises } from "../../api/request";
import { Helmet } from "react-helmet";
const { Meta } = Card;

// const Exercises = () => {
//   const [exercises, setExercises] = useState([]);

//   useEffect(() => {
//     getAllExercises().then((res) => {
//       setExercises(res);
//     });
//   }, [setExercises]);
// };

// function handleDelete(id){
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         deleteExercisesByID(id);
//         setExercises(exercises.filter((x)=>x.id!==id));
//         Swal.fire(
//           'Deleted!',
//           'Your file has been deleted.',
//           'success'
//         )
//       }
//     })
//   }

const HOME = () => {
    <Helmet>
    <title>HOME</title>
    <meta charset="utf-8" />
</Helmet>
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
      getAllExercises().then((res) => {
        setExercises(res);
      });
    }, [setExercises]);
  return (
    <section>
      <section className={style.hero}>
        <div className={style.hero_content}>
          <h1 className={style.hero_title}>
            REAL FITNESS DEPENDS ON
            <br />
            EXERCISE
          </h1>
          <p className={style.hero_text}>SHAPE YOUR BODY WELL.</p>
        </div>
      </section>
      <section className={style.section_2}>
        <div className={style.section_2_title}>
          <h1 className={style.section_2_h1}>We care about what we offer</h1>
          <p className={style.section_2_text}>
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className={style.section_2_cards}>

         {exercises && exercises.map((exercise)=>(

            <div style={{width:'50%'}}>       
              <Card
                hoverable
                style={{
                  width: 240,
               }}
                cover={<img className={style.data_image} alt="example" src={exercise.imageURL} />}
              >
                <Meta title={exercise.title} description={exercise.description} />
              </Card>
              </div>

         ))
             
  
            }
         
        </div>
      </section>

      {/* SECTION 3 */}
      <section className={style.section_2}>
        <div className={style.section_2_title}>
          <h1 className={style.section_2_h1}>Top Courses That are open for Students</h1>
          <p className={style.section_2_text}>Who are in extremely love with eco friendly system.</p>
        </div>
        <Grid container rowSpacing={1} columnSpacing={{ sm: 1, md: 2, lg: 3 }}>
            <Grid item xs={4}>
          <div>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://preview.colorlib.com/theme/gym/img/c1.jpg"
                  />
                }
              >
                <div style={{display:'flex', justifyContent:"space-between"}}>
                <h4 className={style.card_title}>
                  Running Classes
                </h4>
                <p className={style.card_price}>275$</p>
                </div>
              </Card>
          </div>
            </Grid>

            <Grid item xs={4}>
          <div>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://preview.colorlib.com/theme/gym/img/c2.jpg"
                  />
                }
              >
                <div style={{display:'flex', justifyContent:"space-between"}}>
                <h4 className={style.card_title}>
                  Running Classes
                </h4>
                <p className={style.card_price}>275$</p>
                </div>
              </Card>
          </div>
            </Grid>

            <Grid item xs={4}>
          <div>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://preview.colorlib.com/theme/gym/img/c3.jpg"
                  />
                }
              >
                <div style={{display:'flex', justifyContent:"space-between"}}>
                <p className={style.card_title}>
                  Running Classes
                </p>
                <p className={style.card_price}>275$</p>
                </div>
              </Card>
          </div>
            </Grid>

            <Grid item xs={4}>
          <div>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://preview.colorlib.com/theme/gym/img/c4.jpg"
                  />
                }
              >
                <div style={{display:'flex', justifyContent:"space-between"}}>
                <h4 className={style.card_title}>
                  Running Classes
                </h4>
                <p className={style.card_price}>275$</p>
                </div>
              </Card>
          </div>
            </Grid>

            <Grid item xs={4}>
          <div>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://preview.colorlib.com/theme/gym/img/c5.jpg"
                  />
                }
              >
                <div style={{display:'flex', justifyContent:"space-between"}}>
                <h4 className={style.card_title}>
                  Running Classes
                </h4>
                <p className={style.card_price}>275$</p>
                </div>
              </Card>
          </div>
            </Grid>

            <Grid item xs={4}>
          <div>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt="example"
                    src="https://preview.colorlib.com/theme/gym/img/c6.jpg"
                  />
                }
              >
                <div style={{display:'flex', justifyContent:"space-between"}}>
                <h4 className={style.card_title}>
                  Running Classes
                </h4>
                <p className={style.card_price}>275$</p>
                </div>
              </Card>
          </div>
            </Grid>
        </Grid>
      </section>


      {/* SECTION 4 */}
      <section className={style.section_4}>
        <h1 className={style.section_title}>Huge Transaction in last Week</h1>
        <p className={style.section_text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
            <br />
            labore et dolore
            <br />
           magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
           </p>
           <Button variant="contained" color="error" style={{borderRadius:'20px'}}> BECOME A MEMBER</Button>
      </section>
      <section className={style.footer}>
      <p className={style.footer_text}>Copyright ©2023 All rights reserved | This template is made with by <span style={{color:'red'}}>Colorlib</span></p>

      </section>
    </section>
  );
};

export default HOME;
