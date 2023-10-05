import '@styles/globals.css'

export const metadata = {
  title: 'Benjamin Stratton',
  description: 'CEO & Owner of Stratton Solutions, LLC',
}

const Layout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <main>{children}</main>
        </body>
    </html>
  )
}

export default Layout;
