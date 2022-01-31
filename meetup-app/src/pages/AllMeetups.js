import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetups() {
  const [isLoading, setIsLoding] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoding(true);
    fetch('https://react-getting-started-7db92-default-rtdb.firebaseio.com/meetups.json')
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoding(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetups;
