import React from 'react';
import styled from 'styled-components';
import SingleImage from './Image';

const feedsource = [
  {
    source:
      'https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/31128574_1814217492214547_9211932391461879808_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=VXUJr42v8hcAX_U9ham&oh=21713a6166bd598521cc8714add1b8ab&oe=5ED8FFEC ',
    likes: '43',
    comments: '3',
    isVideo: false,
    id: 0,
  },
  {
    source:
      'https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/26068943_1814433155241993_4753095802308526080_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=109&_nc_ohc=raVAm87-BGwAX9WwvwL&oh=c90f7150e265eab68194e8283c3f8202&oe=5ED95C0F',
    likes: '313',
    comments: '10',
    isVideo: true,
    id: 1,
  },
  {
    source:
      'https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/25015831_1978301599108528_8725999722872963072_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=104&_nc_ohc=nORKC8q2CpIAX9JJfJh&oh=f74ffca9060f2054b5c4792b72afb20a&oe=5EDC541B',
    likes: '29',
    comments: '2',
    isVideo: false,
    id: 2,
  },
  {
    source:
      'https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/23667870_184653728779673_7049347522485026816_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=D-WzQ3skNUQAX_Jzhgl&oh=245fd01c92d25db0f1227c2fafb7ae87&oe=5EDCC9F0',
    likes: '18',
    comments: '2',
    isVideo: false,
    id: 3,
  },
  {
    source:
      'https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/22280767_1419350568119701_3330842009580601344_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=CM17D-H4wMMAX8jnniL&oh=e733df085982fbaf345d82488bccb27c&oe=5EDA1200',
    likes: '30',
    comments: '4',
    isVideo: false,
    id: 4,
  },
];
 
const ProfileContainer = styled.div`
  max-width: 70%;
  width: 100%;
  margin: 8% auto;
  position:absolute;
  margin-left:50%;
  transform:translate(-50%)
  
`;
 
const ProfileDetails = styled.div`
  display: flex;
`;
 
const ProfileDetailsLeft = styled.div`
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
 
const ProfileDetailsRight = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`;
 
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  border: 1px solid #ccc;
  padding: 5px;
`;
 
const ProfileDetailsUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
 
const EditProfileButton = styled.div`
  background-color: transparent;
  border: 1px solid #dbdbdb;
  color: #262626;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 9px;
  text-transform: capitalize;
  font-size: 14px;
  margin-left: 20px;
`;
 
const HeadingThreeText = styled.h3``;
 
const ParagraphText = styled.p`
  margin-right: 25px;
`;
 
const ProfileDetailsMeta = styled.div`
  display: flex;
  justify-content: center;
`;
 
const ProfileDetailsName = styled.div`
  text-align: left;
`;
 
const ImagesWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;
 
function Profile() {
  return (
    <ProfileContainer>
      <ProfileDetails>
        <ProfileDetailsLeft>
          <ProfileImage src="https://api.adorable.io/avatars/285/abott@adorable.png" />
        </ProfileDetailsLeft>
 
        <ProfileDetailsRight>
          <ProfileDetailsUsername>
            <HeadingThreeText>yomieluwande</HeadingThreeText>
            <EditProfileButton>Edit profile</EditProfileButton>
          </ProfileDetailsUsername>
 
          <ProfileDetailsMeta>
            <ParagraphText>
              <strong>5</strong> posts
            </ParagraphText>
            <ParagraphText>
              <strong>296</strong> followers
            </ParagraphText>
            <ParagraphText>
              <strong>269</strong> following
            </ParagraphText>
          </ProfileDetailsMeta>
 
          <ProfileDetailsName>
            <ParagraphText>
              <strong>Yomi</strong>
            </ParagraphText>
          </ProfileDetailsName>
        </ProfileDetailsRight>
      </ProfileDetails>
 
      <ImagesWrapper>
        {feedsource.map(item => (
          <SingleImage image={item} key={item.id} />
        ))}
      </ImagesWrapper>
    </ProfileContainer>
  );
}
 
export default Profile;