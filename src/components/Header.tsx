import React from 'react'
import { Button, Nav } from 'react-bootstrap'

export default function Header() {
  return (
    <header>
        <div className="hobby-Innermain">
        <Nav className='hobby-Nav'
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Button className='hobby-Calculator' href="/Calculator">calculator</Button>
            </Nav.Item>
            <Nav.Item>
                <Button className='hobby-JSON' href='/JSON'>JSON</Button>
            </Nav.Item>
        </Nav>
      </div>
    </header>
  )
}
