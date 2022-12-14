import { SegmentedControl } from "@mantine/core";
import { useState, useEffect } from "react";

export const Controls = () => {
  const [rotation,setRotation] = useState('front');
  const [transform,setTransform] = useState('');

  useEffect(()=>{
    switch (rotation) {
      case 'right':
        setTransform('rotateY(-90deg)');
        break;
      case 'left':
        setTransform('rotateY(90deg)');
        break;  
      case 'back':
        if (transform==='rotateY(-90deg)') {
          setTransform('rotateY(-180deg)');
        } else if ('rotateY(90deg)') {
          setTransform('rotateY(180deg)');
        }
        break; 
      case 'top':
        setTransform('rotateX(-90deg)');
        break; 
      default:
        //front
        setTransform('');
    }
  },[rotation, transform]);
  
  return (
    <SegmentedControl
      color="dark"
      fullWidth
      onChange={setRotation}
      sx={{
        border:'2px solid black',
        margin: '1rem auto 1rem auto',
        '&~div[id="scene"]>div':{
          transform: transform+' translateZ(-150px)',
        },
        '@media (max-width: 550px)':{
          display: 'grid',
          width: 'fit-content',
          padding: '0px 4px 0px 4px',
          '&>span':{
            width:'100%'
          }
        }
      }}
      data={[
        {label: 'Show Front', value:'front'},
        {label: 'Show Left', value:'left'},
        {label: 'Show Right', value:'right'},
        {label: 'Show Top', value:'top'},
        {label: 'Show Back', value:'back'},
      ]}
    />
  );
}