import React from 'react';
import styled from 'styled-components';
import SingleImage from './Image';

const feedsource = [
  {
    source:
      'https://instagram.fcdg3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/25014905_296469080863340_9200966536796307456_n.jpg?_nc_ht=instagram.fcdg3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Vd6UDz67KHMAX9fpT5b&oh=a0d7b95c4c39205cabdeacce649d54a4&oe=5F8AB86E',
      
    likes: '43',
    comments: '3',
    isVideo: false,
    id: 0,
  },
  {
    source:
      'https://instagram.fcdg3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/25014905_296469080863340_9200966536796307456_n.jpg?_nc_ht=instagram.fcdg3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Vd6UDz67KHMAX9fpT5b&oh=a0d7b95c4c39205cabdeacce649d54a4&oe=5F8AB86E',
    likes: '313',
    comments: '10',
    isVideo: true,
    id: 1,
  },
  {
    source:
      'https://instagram.fcdg3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/25014905_296469080863340_9200966536796307456_n.jpg?_nc_ht=instagram.fcdg3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Vd6UDz67KHMAX9fpT5b&oh=a0d7b95c4c39205cabdeacce649d54a4&oe=5F8AB86E',
    likes: '29',
    comments: '2',
    isVideo: false,
    id: 2,
  },
  {
    source:
      'https://instagram.fcdg3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/25014905_296469080863340_9200966536796307456_n.jpg?_nc_ht=instagram.fcdg3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Vd6UDz67KHMAX9fpT5b&oh=a0d7b95c4c39205cabdeacce649d54a4&oe=5F8AB86E',
    likes: '18',
    comments: '2',
    isVideo: false,
    id: 3,
  },
  {
    source:
      'https://instagram.fcdg3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/25014905_296469080863340_9200966536796307456_n.jpg?_nc_ht=instagram.fcdg3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Vd6UDz67KHMAX9fpT5b&oh=a0d7b95c4c39205cabdeacce649d54a4&oe=5F8AB86E',
    likes: '30',
    comments: '4',
    isVideo: false,
    id: 4,
  },
];
/* https://instagram.fcdg3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/25014905_296469080863340_9200966536796307456_n.jpg?_nc_ht=instagram.fcdg3-1.fna.fbcdn.net&amp;_nc_cat=108&amp;_nc_ohc=Vd6UDz67KHMAX9fpT5b&amp;oh=67ed02ff1f36335d5a1e0de6c8659ebb&amp;oe=5F8AEAEE 640w,
https://instagram.fcdg3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/25014905_296469080863340_9200966536796307456_n.jpg?_nc_ht=instagram.fcdg3-1.fna.fbcdn.net&amp;_nc_cat=108&amp;_nc_ohc=Vd6UDz67KHMAX9fpT5b&amp;oh=a0d7b95c4c39205cabdeacce649d54a4&amp;oe=5F8AB86E 750w,
https://instagram.fcdg3-1.fna.fbcdn.net/v/t51.2885-15/e35/25014905_296469080863340_9200966536796307456_n.jpg?_nc_ht=instagram.fcdg3-1.fna.fbcdn.net&amp;_nc_cat=108&amp;_nc_ohc=Vd6UDz67KHMAX9fpT5b&amp;_nc_tp=18&amp;oh=6d340ec47d7dc48c360a14b9234ce09f&amp;oe=5F89C289 1080w
https://instagram.fcdg3-1.fna.fbcdn.net/v/t51.2885-15/e35/25014905_296469080863340_9200966536796307456_n.jpg?_nc_ht=instagram.fcdg3-1.fna.fbcdn.net&amp;_nc_cat=108&amp;_nc_ohc=Vd6UDz67KHMAX9fpT5b&amp;_nc_tp=18&amp;oh=6d340ec47d7dc48c360a14b9234ce09f&amp;oe=5F89C289 */


const ProfileContainer = styled.div`
  max-width: 70%;
  width: 100%;
  margin: 8% auto;
  position:absolute;
  margin-left:50%;
  transform:translate(-50%);
  @media screen and (max-width:1394px){
    margin: 15% auto;
    margin-left:50%;
    transform:translate(-50%);
  }
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
          <ProfileImage src="logo192.png" />
        </ProfileDetailsLeft>
 
        <ProfileDetailsRight>
          <ProfileDetailsUsername>
            <HeadingThreeText>ReactUser</HeadingThreeText>
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
              <strong>Shynryu</strong>
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