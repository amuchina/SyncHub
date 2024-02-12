import React, { useState } from 'react';
import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function Update({auth}){

    return (
        <AuthenticatedLayout
            user={auth.user}
            currentPage={'settings'}
        >
            <Head title="Impostazioni"/>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Impostazioni</h2>
                        <p>Sezione attualmente in lavorazione!</p>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}

export default Update;
