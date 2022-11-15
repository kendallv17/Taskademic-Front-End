export default function Terms(){
    return (
        <div className="flex flex-col justify-center px-6 py-20 mx-auto md:h-screen lg:py-0 text-left max-w-md border border-mercury-900 rounded-2xl shadow-lg">
            <h1 className="text-xl font-medium">Terms of service</h1>
            <p>
                Taskademic allows it's users to self-manage their learning periods tasks by using a web based environment to maximize the flexibility and access to the application anywhere, anytime.
            </p>
            <p>
                We offer different licensing tiers for taskademic in order to monetize the software without violating the data privacy of our users. By using our free tier, you are granting us permission to show you
                adds but if you have any paid license you will not be seeing any type of advertisement because we are getting paid by you.
            </p>
            <h2 className="text-xl font-medium">1. About our services</h2>
            <ol class="list-decimal">
                <li className="ml-10">
                    <p>
                        <strong>Task Management</strong>: We allow all users, without considering license tier, to add as much tasks as they want because we know that every educational period is different and that
                        education is a constant in everyones life.
                    </p>
                </li>
                <li className="ml-10">
                    <p>
                        <strong>Educational Period Management</strong>: We allow every user with a paid license to store a record of all the semesters and it's tasks in order to check them when they feel the need of it, but all users 
                        with a free license tier will only have the possibility to store up to three semesters
                    </p>
                </li>
            </ol>
            <h2 className="text-xl font-medium">2. How do we pay our services?</h2>
            <p>
                We obtain most of our revenue from the paid licenses that our users buy, but also there is a porcentage that comes from add selling
            </p>
        </div>
    )
}