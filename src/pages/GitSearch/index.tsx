import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

type FormData = {
  user: string;
};

export type Profile = {
  avatar_url: string;
  url: string;
  followers: number;
  location: string;
  name: string;
};

const UserSearch = () => {
  const [formdata, setFormData] = useState<FormData>({
    user: ''
  });

  const [profile, setProfile] = useState<Profile>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formdata, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formdata.user}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
      });
  };

  return (
    <>
      <div className="git-search-container">
        <div className="git-search-card">
          <h1 className="git-search-title">Encontre um perfil Github</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <input
                type="text"
                name="user"
                className="search-input"
                placeholder="Usuário Github"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </form>
        </div>
      </div>

      {profile && (
        <>
          <ResultCard profile={profile} />
        </>
      )}
    </>
  );
};

export default UserSearch;
