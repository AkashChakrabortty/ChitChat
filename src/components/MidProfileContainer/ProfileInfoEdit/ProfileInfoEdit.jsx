import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DefaultProfileInfoData } from '../../../fakeData/DefaultProfileInfoData/DefaultProfileInfoData';
import { useEditProfileInfoMutation, useGetSingleUserInfoQuery } from '../../../features/api/apiSlice';
import { UserInfo } from '../../../UserContext/AuthProvider';

const ProfileInfoEdit = () => {
    const { user} = useContext(UserInfo);
    const {data} = useGetSingleUserInfoQuery({email:user?.email});
    let profilePhotoLink;
    let coverPhotoLink;
    const navigate = useNavigate();
    const [setEdit,{isLoading , isSuccess}] = useEditProfileInfoMutation({email:user?.email});
    const handleForm = (event) => {
        event.preventDefault();
        const bio = event.target.bio.value;
        const study = event.target.Study.value;
        const works = event.target.Work.value;
        const from = event.target.From.value;
        const relationship = event.target.Relationship.value;
        const profilePhoto = event.target.profilePhoto.files[0];
        const coverPhoto = event.target.coverPhoto.files[0];

        const imgbb_key = process.env.REACT_APP_imgbb_key;
        const formData = new FormData();
        formData.append("image", profilePhoto);
      
        const url = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;
        fetch(url, {
            method: "POST",
            body: formData,
          })
            .then((res) => res.json())
            .then((data) => {
                profilePhotoLink = data.data.display_url;
                const formData1 = new FormData();
                formData1.append("image", coverPhoto);

                fetch(url, {
                    method: "POST",
                    body: formData1,
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      coverPhotoLink = data.data.display_url;
                      const editInfo = {
                        bio,
                        study,
                        works,
                        from,
                        relationship,
                        profilePhotoLink,
                        coverPhotoLink,
                        email: user.email
                    }
                    setEdit(editInfo)
                    })
            })


    }
    if(isSuccess){
        return navigate('/profile')
    }
    return (
        <div className='sm:w-1/2 w-10/12 mx-auto mt-2 bg-white drop-shadow-lg p-4'>
            <h2 className='font-semibold text-center text-xl'>{data?.name}'s Profile Information</h2>
            <form onSubmit={handleForm}>
           {
                DefaultProfileInfoData.map((value,index)=>{
                    return  <div className="form-control m-2 p-2" key={index}>
                    <div className="flex items-center">
                      <div className="icon ml-2">
                      {value.icon}
                      </div>
                      <div className="in w-full ml-2">
                        <input
                          type="text" required
                          className="input focus:outline-none w-full bg-base-200" placeholder={value.name} name={value.name}
                        />
                      </div>
                    </div>
                  </div>
                })
            }
            <div className="form-control m-2 flex flex-row gap-2 p-2">
            <div className="type flex items-center">
            Profile Photo:
            </div>
            <div className="filed">
            <input
              type="file"
              className="border border-gray-200"
              placeholder='akash'
              name="profilePhoto"
              required
            />
            </div>
           
            </div>

            <div className="form-control m-2 flex flex-row gap-2 p-2">
            <div className="type flex items-center">
            Cover Photo:
            </div>
            <div className="filed">
            <input
              type="file"
              className="border border-gray-200"
              placeholder='akash'
              name="coverPhoto"
              required
            />
            </div>
           
            </div>
            <div className="form-control m-2 flex flex-row gap-2 p-2">
            <textarea placeholder="Bio" required className="textarea textarea-bordered textarea-xs w-full max-w-xs font-semibold" name='bio'></textarea>
            </div>
            <div className="submit text-center">
            <button  className='btn-default' type="submit" style={{border: 'none'}}>
                  {
                      isLoading ? <div className="flex justify-center items-center">
                      <div className="custom-spinner"></div>
                     </div> :  <span>Update</span>
                    }
                  </button>
            </div>
            </form>

        </div>
    );
};

export default ProfileInfoEdit;