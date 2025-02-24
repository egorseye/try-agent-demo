
import { useState } from "react";
import { ChartLine, Play, MessageSquare, ThumbsUp, ShoppingCart, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [testType, setTestType] = useState("standard");
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

  const handleStartTest = () => {
    if (!inputText) {
      toast({
        title: "Input Required",
        description: "Please enter some text to test the agent.",
        variant: "destructive",
      });
      return;
    }
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-8">
      <main className="container mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <header className="text-center space-y-4 fade-in">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Demo Mode
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Try Before You Buy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Test the agent's functionality in a live environment before making a purchase
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Demo Window */}
          <Card className="glassmorphism scale-in">
            <CardHeader>
              <CardTitle>Interactive Demo</CardTitle>
              <CardDescription>Test the agent in real-time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Enter your test input here..."
                className="min-h-[200px] resize-none"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <div className="flex items-center gap-4">
                <Select value={testType} onValueChange={setTestType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select test type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Test</SelectItem>
                    <SelectItem value="custom">Custom Scenario</SelectItem>
                  </SelectContent>
                </Select>
                <Button 
                  onClick={handleStartTest}
                  disabled={isRunning}
                  className="w-32"
                >
                  {isRunning ? "Running..." : (
                    <div className="flex items-center gap-2">
                      <Play size={16} />
                      <span>Start Test</span>
                    </div>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <Card className="glassmorphism scale-in">
            <CardHeader>
              <CardTitle>Test Results</CardTitle>
              <CardDescription>Performance metrics and analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/50 border">
                  <div className="text-sm font-medium text-gray-500">Response Time</div>
                  <div className="text-2xl font-semibold">0.8s</div>
                </div>
                <div className="p-4 rounded-lg bg-white/50 border">
                  <div className="text-sm font-medium text-gray-500">Accuracy</div>
                  <div className="text-2xl font-semibold">98%</div>
                </div>
              </div>
              <div className="h-[200px] flex items-center justify-center border rounded-lg">
                <ChartLine className="w-6 h-6 text-gray-400" />
                <span className="ml-2 text-gray-500">Performance Graph</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 fade-in">
          <Button size="lg" className="w-full sm:w-auto">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Buy Now
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact Developer
          </Button>
        </div>

        {/* Feedback Section */}
        <Card className="glassmorphism max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Feedback</CardTitle>
            <CardDescription>Help us improve the agent</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea
                placeholder="Share your experience with the demo..."
                className="min-h-[100px]"
              />
              <div className="flex justify-end">
                <Button variant="secondary">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Submit Feedback
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
