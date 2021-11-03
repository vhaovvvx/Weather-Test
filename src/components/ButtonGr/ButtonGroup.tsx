import React, { useState } from 'react';

interface TButtonGroup {
  buttons: string[];
  shows: (name: string) => void;
}

const ButtonGroup = (props: TButtonGroup) => {
  const { buttons, shows } = props;
  const query = 'Today';
  const [clickedId, setClickedId] = useState(-1);
  const [actived, setActived] = useState(0);

  const handleClick = (event: any, id: number) => {
    console.log(event);
    setClickedId(id);
    shows(event);
    if (actived === 0) {
      setActived(-1);
    }
  };

  return (
    <React.Fragment>
      {buttons.map((buttonLabel, i) => (
        <button
          key={i}
          value={query}
          name={buttonLabel}
          onClick={(event) => handleClick(event, i)}
          className={
            i === actived
              ? 'btn actived'
              : 'btn ' && (i === clickedId ? 'btn actived' : 'btn')
          }
        >
          {buttonLabel}
        </button>
      ))}
    </React.Fragment>
  );
};

export default ButtonGroup;
