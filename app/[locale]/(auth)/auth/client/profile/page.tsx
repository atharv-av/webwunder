import ProfileDetails from '@/components/profile/details'
import ProfileImageName from '@/components/profile/image-name'

export default async function ProfilePage() {
    return (
        <section>
            <div className="container mx-0 py-8">
                <ProfileImageName className='mb-8' />
                <ProfileDetails />
            </div>
        </section>
    )
}
