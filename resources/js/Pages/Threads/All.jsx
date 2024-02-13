import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from "@inertiajs/react";

export default function All({ auth, threads }) {
    return(
        <AuthenticatedLayout
            user={auth.user}
            currentPage={'threads'}
        >
            <Head title="Threads" />

            {threads.map((thread) => {console.log(thread)})}

        </AuthenticatedLayout>
    );
}
