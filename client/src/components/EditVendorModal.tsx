import React, { useState } from 'react';
import EditVendor from './EditVendor';

// export default function EditVendorModal() {
    interface EditVendorModalProps {}

    const EditVendorModal: React.FC<EditVendorModalProps> = () => {
    const [showEditModal, setShowEditModal] = useState(true);

    return (
        <>
        <button
        className="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() =>setShowEditModal(true)}
        >  
        Open to View        
        </button>
    

    {showEditModal && (

        <>

          <div

            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"

          >

            <div className="relative w-auto my-6 mx-auto max-w-3xl">

              {/*content*/}

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

              


                <EditVendor handleClose={() => setShowEditModal(false)} />

              

                {/*footer*/}

                

              </div>

            </div>

          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

        </>

      )} 

    </>

  );

}

export default EditVendorModal