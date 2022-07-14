import * as React from 'react';

const GoogleMapsLocation = () => {
  return (
    <iframe
      src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.585343745599!2d174.47829731532636!3d-35.598034880213795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0b6f75fe56a227%3A0x5d2cfae8103cf27e!2s480%20Waiotoi%20Road%2C%20Matapouri%200173!5e1!3m2!1sen!2snz!4v1656726699445!5m2!1sen!2snz'}
      width={'100%'}
      height={450}
      style={{ border: 0 }}
      allowFullScreen
      loading={'lazy'}
      referrerPolicy={'no-referrer-when-downgrade'}
    />
  );
};

export default GoogleMapsLocation;
