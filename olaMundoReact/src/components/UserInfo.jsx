import React from 'react';

export default function UserInfo(props) {
  return (
    <>
      <img src={props.photo} alt={`Foto de ${props.name}`} className="avatar" />
      <h2>{props.name}</h2>
      <p className="profession">{props.profession}</p>
    </>
  );
}