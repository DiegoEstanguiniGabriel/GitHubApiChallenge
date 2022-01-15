import { Profile } from 'pages/GitSearch';
import './styles.css';

type Props = {
  profile: Profile;
};

const ResultCard = ({ profile }: Props) => {
  return (
    <div className="git-result-container">
      <div className="git-result-card">
        <div className="git-result-content">
          <div className="git-result-image">
            <img src={profile.avatar_url} />
          </div>
          <div className="git-result-data-card">
            <div className="git-result">
              <h6 className="result-info">Informações</h6>
              <p className="result-label">
                Perfil:&nbsp;
                <a href="{profile.url}" className="result-value">
                  {profile.url}
                </a>
              </p>
              <p className="result-label">
                Seguidores:&nbsp;<span className="result-value">{profile.followers}</span>
              </p>
              <p className="result-label">
                Localidade:&nbsp;<span className="result-value">{profile.location}</span>
              </p>
              <p className="result-label">
                Nome:&nbsp;<span className="result-value">{profile.name}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
