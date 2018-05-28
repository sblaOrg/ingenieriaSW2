/*
 * Created on Feb 8, 2010
 *
 */
package traveller.com.wolfram.alpha.impl;

import java.io.Serializable;

import org.w3c.dom.Element;

import traveller.com.wolfram.alpha.WAException;
import traveller.com.wolfram.alpha.WALink;
import traveller.com.wolfram.alpha.visitor.Visitor;


public class WALinkImpl implements WALink, Serializable {
    
    private String url;
    private String text;
    private String title;
    
    private static final long serialVersionUID = 8863194509191889875L;

    
    WALinkImpl(Element thisElement) throws WAException {     
        url = thisElement.getAttribute("url");
        text = thisElement.getAttribute("text");
        title = thisElement.getAttribute("title");
    }
    
    ////////////////////  WALink interface  //////////////////////////////
    
    public String getURL() {
        return url;
    }
    
    public String getText() {
        return text;
    }
    
    public String getTitle() {
        return title;
    }
    

    ////////////////////  Visitable interface  //////////////////////////////
    
    public void accept(Visitor v) {
        // TODO Auto-generated method stub
    }

}
