import React, {useEffect, useRef, useState} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../css/Style.css";
import {Link} from "@inertiajs/react";
import HorizontalLine from "@/Pages/HorizontalLine.jsx";

function Edit({auth}) {
    const [user, setUser] = useState({
        username: '',
        email: '',
    });

    const [isEditing, setIsEditing] = useState(false);
    const [isEmailVerifiedStyle, setIsEmailVerifiedStyle] = useState('card-text text-pink-600');
    const emailVerifiedAt = auth.user.email_verified_at;
    const [isEmailVerified, setIsEmailVerified] = useState(false);

    useEffect(() => {
        if (emailVerifiedAt) {
            setIsEmailVerified(true);
            setIsEmailVerifiedStyle('card-text text-black');
        }
    })

    const handleUpdateProfile = () => {
        // Aggiungi logic per inviare le informazioni aggiornate al server
        setIsEditing(false);
    };
    return (
        <Authenticated
            user={auth.user}
            currentPage={'profile'}>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body flex flex-column gap-3">
                        <h2 className="card-title">{isEditing ? 'Modifica Profilo' : 'Il tuo profilo'}</h2>
                        <HorizontalLine/>
                        {isEditing ? (
                            <div className="flex-column">
                            <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        value={user.username}
                                        onChange={(e) => setUser({...user, username: e.target.value})}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={user.email}
                                        onChange={(e) => setUser({...user, email: e.target.value})}
                                    />
                                </div>

                                {/* Aggiungi altri campi del profilo qui */}
                                <button className="btn btn-primary" onClick={handleUpdateProfile}>Salva Modifiche
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                <p className="card-text"><strong className="text-black">Username: </strong>
                                    <p className="card-text text-black">{auth.user.name}</p></p>
                                <p className="card-text"><strong className="text-black">Email: </strong>
                                    <p className="card-text text-black">{auth.user.email}</p></p>
                                <p className="card-text"><strong className="text-black">Email verificata il: </strong>
                                    <strong className={isEmailVerifiedStyle}
                                    >{
                                        isEmailVerified
                                            ? emailVerifiedAt
                                            : 'Non verificata'
                                    }
                                    </strong>
                                    {
                                        !isEmailVerified
                                            ?
                                            <span>
                                                <Link href="/profile" className="ml-5" style={{
                                                    color: '#1d4ed8'
                                                }}>Verificala ora
                                                </Link>
                                            </span>
                                            : null
                                    }
                                </p>
                                <div className="items-center">
                                    <button className="btn btn-info w-2/4" onClick={() => setIsEditing(true)}>
                                        Modifica Profilo
                                    </button>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}

export default Edit;
