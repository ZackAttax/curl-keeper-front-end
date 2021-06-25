import React from "react"
export const FilterForm =
        <form>
            <label>Curl Pattern</label>
            <select name="curl_pattern" id='curlPattern'
                value={this.state.curl_pattern} onChange={this.handleChange}>
                    <option value="2a">2A</option>
                    <option value="2b">2B</option>
                    <option value="2c">2C</option>
                    <option value="3a">3A</option>
                    <option value="3b">3B</option>
                    <option value="3c">3C</option>
                    <option value="4a">4A</option>
                    <option value="4b">4B</option>
                    <option value="4c">4C</option>
                </select>
                <br/>

                <label>Curl Type</label>
                <select name="curl_type" id='curlType'
                value={this.state.curl_type}
                onChange={this.handleChange}>
                    <option value="wavy">Wavy</option>
                    <option value="curly">Curly</option>
                    <option value="oily">Oily</option>
                </select>
                <br/>

                <label>Porosity</label>
                <select name="porosity" id='porosity'
                value={this.state.porosity}
                onChange={this.handleChange}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <br/>

                <label>Density</label>
                <select name="density" id='density'
                value={this.state.density}
                onChange={this.handleChange}>
                    <option value="thin">Thin</option>
                    <option value="medium">Medium</option>
                    <option value="thick">Thick</option>
                </select>
                <br/>

                <label>Width</label>
                <select name="width" id='width'
                value={this.state.width}
                onChange={this.handleChange}>
                    <option value="thin">Thin</option>
                    <option value="medium">Medium</option>
                    <option value="thick">Thick</option>
                </select>
                <br/>
                
            </form>