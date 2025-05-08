import React from 'react'
import UserInfo from './UserInfo';
import ContactInfo from './ContactInfo';
import SkillsList from './SkillsList';

export default function ProfileCard(props) {
    return (
        <div>
          <UserInfo name={props.name} photo={props.photo} profession={props.profession} />

          <ContactInfo email={props.email} phone={props.phone} linkedin={props.linkedin} />

          <SkillsList skills={props.skills} />
        </div>
    )
}
