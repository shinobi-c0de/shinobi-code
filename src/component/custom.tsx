import React from 'react';
import { Button } from 'rspress/theme';
import "../../styles/index.css";

export function CustomButton({ text, link }: { text: string, link: string }) {
    return (
        <Button className="custom-button" type='a' text={text} href={link} external={false} />
    );
}

export function VSButton() {
    return (
            <Button className="vs-button" theme="alt" text={
                <span className="vscode">
                    <img src="/vscode.png"></img> 
                    Download Extension
                </span>} 
                type='a'
                href="https://marketplace.visualstudio.com/items?itemName=your-extension-id"
                external={false}
            />
    );
}